<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MARCAJE_DETAIL extends Model
{
    use HasFactory;

    protected $table = 'marcaje_detail';
    protected $primarykey = 'id';

    protected $fillable = [
        'fk_idUsuario','fk_idestado'
    ];

    public $timestamps = false;
    //protected $foreingkey = 'fk_idUsuario';
    //protected $foreingkey = 'fk_idestado';
}
