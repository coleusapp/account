<?php

namespace Coleus\Account\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Coleus\Account\QueryBuilders\RoleQueryBuilder;

/**
 * Coleus\Account\Models\Role
 *
 * @property int $id
 * @property string $name
 * @property string $guard_name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read ?int $permissions_count
 * @property-read Collection|User[] $users
 * @property-read ?int $users_count
 * @method static RoleQueryBuilder|Role newModelQuery()
 * @method static RoleQueryBuilder|Role newQuery()
 * @method static RoleQueryBuilder|Role permission($permissions)
 * @method static RoleQueryBuilder|Role query()
 * @method static RoleQueryBuilder|Role search(?string $search)
 * @method static RoleQueryBuilder|Role whereCreatedAt($value)
 * @method static RoleQueryBuilder|Role whereGuardName($value)
 * @method static RoleQueryBuilder|Role whereId($value)
 * @method static RoleQueryBuilder|Role whereName($value)
 * @method static RoleQueryBuilder|Role whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Role extends \Spatie\Permission\Models\Role
{
    public function newEloquentBuilder($query): RoleQueryBuilder
    {
        return new RoleQueryBuilder($query);
    }
}
