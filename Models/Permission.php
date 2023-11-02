<?php

namespace Coleus\Account\Models;

use Illuminate\Support\Carbon;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Eloquent\Collection;
use Coleus\Account\QueryBuilders\PermissionQueryBuilder;
use Spatie\Permission\Models\Permission as SpatiePermission;

/**
 * Coleus\Account\Models\Permission
 *
 * @property int $id
 * @property string $name
 * @property string $guard_name
 * @property ?Carbon $created_at
 * @property ?Carbon $updated_at
 * @property-read Collection|SpatiePermission[] $permissions
 * @property-read ?int $permissions_count
 * @property-read Collection|Role[] $roles
 * @property-read ?int $roles_count
 * @property-read Collection|User[] $users
 * @property-read ?int $users_count
 * @method static PermissionQueryBuilder|Permission newModelQuery()
 * @method static PermissionQueryBuilder|Permission newQuery()
 * @method static PermissionQueryBuilder|Permission permission($permissions)
 * @method static PermissionQueryBuilder|Permission query()
 * @method static PermissionQueryBuilder|Permission role($roles, $guard = null)
 * @method static PermissionQueryBuilder|Permission search(?string $search)
 * @method static PermissionQueryBuilder|Permission whereCreatedAt($value)
 * @method static PermissionQueryBuilder|Permission whereGuardName($value)
 * @method static PermissionQueryBuilder|Permission whereId($value)
 * @method static PermissionQueryBuilder|Permission whereName($value)
 * @method static PermissionQueryBuilder|Permission whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Permission extends SpatiePermission
{
    public function newEloquentBuilder($query): PermissionQueryBuilder
    {
        return new PermissionQueryBuilder($query);
    }
}
