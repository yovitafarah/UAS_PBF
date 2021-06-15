<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\Admin\UserResource;
use App\Models\User;
use Illuminate\Http\Response;


class UserApiController extends Controller
{
    public function index()
    {
        return new UserResource(User::all());
    }
    public function update(UserRequest $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update($request->validated());

        return response()->json([
            'user' => $user
        ], 201);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function store(StoreUserRequest $request)
    {
        $user = User::create($request->validated());

        return (new UserResource($user))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(User $user)
    {
        return response([
            'meta' => [],
        ]);
    }

    public function edit(User $user)
    {
        return response([
            'data' => new UserResource($user),
            'meta' => [],
        ]);
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }
}
