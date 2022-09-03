<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ESTADO;

class ESTADO_CONTROLLER extends Controller
{
    //
    public function obtenerEstado(){
        return ESTADO::all();
    }
}
