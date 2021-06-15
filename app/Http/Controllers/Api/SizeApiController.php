<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSizeRequest;
use App\Http\Requests\UpdateSizeRequest;
use App\Http\Resources\Admin\SizeResource;
use App\Models\Size;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SizeApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('size_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SizeResource(Size::advancedFilter());
    }

    public function store(StoreSizeRequest $request)
    {
        $size = Size::create($request->validated());

        return (new SizeResource($size))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Size $size)
    {
        abort_if(Gate::denies('size_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Size $size)
    {
        abort_if(Gate::denies('size_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new SizeResource($size);
    }

    public function update(UpdateSizeRequest $request, Size $size)
    {
        $size->update($request->validated());

        return (new SizeResource($size))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Size $size)
    {
        abort_if(Gate::denies('size_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new SizeResource($size),
            'meta' => [],
        ]);
    }

    public function destroy(Size $size)
    {
        abort_if(Gate::denies('size_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $size->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
