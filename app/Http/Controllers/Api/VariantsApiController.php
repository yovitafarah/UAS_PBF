<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVariantRequest;
use App\Http\Requests\UpdateVariantRequest;
use App\Http\Resources\Admin\VariantResource;
use App\Models\Variant;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class VariantsApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('variant_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new VariantResource(Variant::advancedFilter());
    }

    public function store(StoreVariantRequest $request)
    {
        $variant = Variant::create($request->validated());

        if ($media = $request->input('images', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $variant->id]);
        }

        return (new VariantResource($variant))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Variant $variant)
    {
        abort_if(Gate::denies('variant_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Variant $variant)
    {
        abort_if(Gate::denies('variant_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new VariantResource($variant);
    }

    public function update(UpdateVariantRequest $request, Variant $variant)
    {
        $variant->update($request->validated());

        $variant->updateMedia($request->input('images', []), 'variant_images');

        return (new VariantResource($variant))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Variant $variant)
    {
        abort_if(Gate::denies('variant_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new VariantResource($variant),
            'meta' => [],
        ]);
    }

    public function destroy(Variant $variant)
    {
        abort_if(Gate::denies('variant_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $variant->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['variant_create', 'variant_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new Variant();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
