<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MARCAJE_DETAIL;

class MARCAJE_DETAIL_CONTROLLER extends Controller
{
    //
    public function obtenerDetalle(){
        return MARCAJE_DETAIL::all();
    }
    /**
     * Store a newly create resource in storage
     * 
     * @param \Illuminate\http\Request $request
     * @return \Illuminate\http\Response
     */
    public function store(Request $request)
    {
        $marcajeD = new MARCAJE_DETAIL();
       
        $marcajeD->fk_idUsuario = $request->fk_idUsuario;
        $marcajeD->fk_idestado = $request->fk_idestado;
        $marcajeD->save();
    }   

    public function show($idMarcaje)
    {
        $marcajeD = MARCAJE_DETAIL::find($idMarcaje);
        return $marcajeD;
    }
}
