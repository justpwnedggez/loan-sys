<?php

namespace App\Http\Controllers\Main\Reports;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Reports\Transactions\TransactionRegister\TransRegisterReportInterface;

class TransRegisterController extends Controller
{
    protected $transRegisterRepository;

    public function __construct(TransRegisterReportInterface $transRegisterRepository)
    {
        $this->transRegisterRepository = $transRegisterRepository;
    }

    public function repIndex()
    {
        return Inertia::render('Reports/TransRegister');
    }

    public function toFilter(Request $request)
    {
        $transaction = $this->transRegisterRepository->retrieveData($request);

        return Inertia::render('Reports/Views/Transactions/TransRegisterReport', ['transaction' => $transaction]);
    }
}
