<?php

namespace App\Http\Requests;

use App\Models\Variant;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreVariantRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('variant_create');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
            ],
            'images' => [
                'array',
                'nullable',
            ],
            'images.*.id' => [
                'integer',
                'exists:media,id',
            ],
        ];
    }
}
