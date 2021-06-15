<?php

namespace App\Http\Requests;

use App\Models\Transaction;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateTransactionRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('transaction_edit');
    }

    public function rules()
    {
        return [
            'users_id' => [
                'integer',
                'exists:users,id',
                'required',
            ],
            'products' => [
                'array',
            ],
            'products.*.id' => [
                'integer',
                'exists:products,id',
            ],
            'address' => [
                'string',
                'required',
            ],
            'town' => [
                'string',
                'required',
            ],
            'state' => [
                'string',
                'required',
            ],
            'postal_code' => [
                'string',
                'required',
            ],
            'phone' => [
                'string',
                'required',
            ],
        ];
    }
}
