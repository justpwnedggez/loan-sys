<?php

namespace App\Http\Repositories\MasterFiles\Loans;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\MasterFiles\Loans\LoansTrait;
use App\Http\Traits\ModelsTrait;

class LoansViewRepository implements LoansInterface
{
    use CommonTrait, LoansTrait, ModelsTrait;

    public function getLoans($request)
    {
        $loans = $this->loansModel()->get();
        return $this->modifyFields($loans);
    }

    public function modifyFields($query)
    {
        return $query->map(function ($item, $key) {
            return collect($this->items($item, $key));
        });
    }

    public function items($item, $key)
    {
        $item['no'] = $key + 1;
        $item['status'] = $item['status'] == 'Y' ? 'Active' : 'Inactive';
        $item['date_created'] = date('m/d/Y', strtotime($item->created_at));
        $item['action'] = route('main.view.loans', ['id' => $item->encrypted_id]);

        return $item;
    }

    public function findLoan($id)
    {
        $decyptId = $this->decryptId($id);
        return $this->loansModel()->find($decyptId);
    }
}
