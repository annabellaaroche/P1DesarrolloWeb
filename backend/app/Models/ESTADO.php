<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ESTADO extends Model
{
    use HasFactory;

    protected $table = 'estado';
    protected $primarykey = 'id_estado';

    public $timestamps = false;
}
