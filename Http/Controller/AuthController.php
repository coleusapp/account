<?php

namespace Coleus\Account\Http\Controller;

use Coleus\Account\Http\Requests\RegisterWithEmailRequest;
use Coleus\Account\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public string $redirectTo = '/desktop';

    public function loginForm(): Response
    {
        return Inertia::render('TheLogin');
    }

    public function registerForm(Request $request): Response
    {
        return Inertia::render('TheRegister');
    }

    public function registerWithEmail(RegisterWithEmailRequest $request): RedirectResponse
    {
        User::create($request->validated());

        if (Auth::attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();

            return redirect()->intended('desktop');
        }

        return redirect()->route('login')->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request): Redirector|Application|RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login')->with('message', 'Successfully singed out.');
    }

    public function loginWithEmail(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('desktop');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function forgotPasswordForm(): Response
    {
        return Inertia::render('ForgotPassword');
    }

    public function forgotPasswordWithEmail(Request $request): RedirectResponse
    {
        $request->validate(['email' => 'required', 'email']);

        Password::sendResetLink(
            $request->only('email')
        );

        session()->flash('message', __('If there is an account associated with this email, you will receive an email with a link to reset your password.'));

        return back();
    }

    public function resetPasswordForm(string $token): Response
    {
        return Inertia::render('ResetPassword', ['token' => $token]);
    }

    public function resetPassword(Request $request): RedirectResponse
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => $password,
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        session()->flash('message', __($status));

        return $status === Password::PASSWORD_RESET
            ? redirect()->route('login')->with('status', __($status))
            : back()->withErrors(['email' => [__($status)]]);
    }
}
