<?php

namespace App\Http\Services\MasterFiles\Loans;

use App\Http\Traits\CommonTrait;
use App\Http\Traits\ModelsTrait;
use App\Http\Traits\MasterFiles\Loans\LoansTrait;

class LoanService
{
    use CommonTrait, ModelsTrait, LoansTrait;

    public function createLoan(array $data)
    {
        $formattedData = $this->formatData($data);

        return $this->loansModel()->create($formattedData);
    }

    public function updateLoan(array $data)
    {
        $formattedData = $this->formatData($data);

        return $this->loansModel()->where('id', $formattedData['id'])->update($formattedData);
    }
}
