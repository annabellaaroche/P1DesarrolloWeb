<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\USUARIO;


class USUARIO_CONTROLLER extends Controller
{
    //
    public function obtenerUsuarios(){
        return USUARIO::all();
    }

    /**
     * Store a newly create resource in storage
     * 
     * @param \Illuminate\http\Request $request
     * @return \Illuminate\http\Response
     */
    public function store(Request $request)
    {
        $usuario = new USUARIO();
        $usuario->nombre = $request->nombre;
        $usuario->contraseña = $request->contraseña;
        $usuario->email = $request->email;
        $usuario->tipo_usuario = $request->tipo_usuario;
        $usuario->save();
    }

    /**
     * Update the specified resource in storage
     * 
     * @param \Illuminate\http\Request $request
     * @param \App\Models\USUARIO $usuario
     * @return \Illuminate\http\Response
     */
    public function update(Request $request, USUARIO $usuario)
    {
        $usuario->update($request->all());

        return response ()->json([
            'message' => "Usuario updated successfully!",
            'usuario' => $usuario
        ], 200);
    }
     /**
     * Remove the specified resource from storage
     * 
     * @param \App\Models\USUARIO $usuario
     * @return \Illuminate\http\Response
     */
    public function destroy(USUARIO $usuario)
    {
        $usuario->delete();

        return response ()->json([
            'message' => "Client deleted successfully!",
        ], 200);
    }


}
