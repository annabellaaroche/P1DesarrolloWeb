<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\USUARIO;
use Illuminate\Support\Facades\DB;



class USUARIO_CONTROLLER extends Controller
{
    //
    public function obtenerUsuarios(){
        
        $usuario = DB::table('usuario')->where('activo',1)->get();
        return $usuario;
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
        $usuario->contrasena = $request->contrasena;
        $usuario->email = $request->email;
        $usuario->tipo_usuario = $request->tipo_usuario;
        $usuario->save();
    }

    public function show($id)
    {
        $usuario = USUARIO::find($id);
        return $usuario;
    }

    public function showByEmail($email)
    {
        $usuario = DB::table('usuario')->where('email', $email)->get();
        return $usuario;
    }
    /**
     * Update the specified resource in storage
     * 
     * @param \Illuminate\http\Request $request
     * @param \App\Models\USUARIO $usuario
     * @return \Illuminate\http\Response
     */
    public function update($id,Request $request)
    {
        $usuario = USUARIO::find($id);
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
 public function destroy($id, Request $request)
    {
        $usuario = new USUARIO();
        $activo = 0;
        $usuario->activo = $request->activo;
        $usuario = USUARIO::find($id);
        $usuario->update(['activo' => $request->input($activo)]);
        return response ()->json([
            'message' => "Usuario deleted successfully!",
            'usuario' => $usuario
        ], 200);
    }


}
