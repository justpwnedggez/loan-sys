<?php

namespace App\Http\Controllers\Main\Reports;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Repositories\Reports\Transactions\TransactionPayment\TransPaymentReportInterface;

class TransPaymentController extends Controller
{
    protected $transPaymentRepository;

    public function __construct(TransPaymentReportInterface $transPaymentRepository)
    {
        $this->transPaymentRepository = $transPaymentRepository;
    }

    public function repIndex()
    {
        return Inertia::render('Reports/TransPayment');
    }

    public function toFilter(Request $request)
    {
        $payment = $this->transPaymentRepository->retrieveData($request);

        return Inertia::render('Reports/Views/Transactions/TransPaymentReport', ['payment' => $payment]);
    }
}
