import React from 'react';
import { Divider } from 'primereact/divider';

const SubscriptionAgreement = () => {

    return (
        <div className="subscription-form p-grid p-fluid">
            <div className="p-field p-col-12">
                <h2 className="text-center font-extrabold">SUBSCRIPTION AGREEMENT</h2>
            </div>

            <div className="p-field p-col-12">
                <p className="indent-10">
                    I agree to subscribe additional share capital in the amount of PHP <span className="underline underline-offset-1"></span>
                    upon full payment of the initial fixed deposit and pay to the cooperative initial subscription within
                    <span className="underline underline-offset-1"></span> years that it may notify me in writing or any other means of communication.
                </p>
            </div>

            <div className="p-field p-col-12">
                &nbsp;
            </div>

            <div className="p-field p-col-12">
                <p className="indent-10">
                    Failure on my part not to pay the required member capital build-up will cause the cooperative to deduct
                    from my loan proceeds, dividend, and patronage refund. If in the absence of loan proceeds, dividend, and
                    patronage refund, I will agree to pay the amount and prescribed fine and penalty therein.
                </p>
            </div>

            <Divider />

            <div className="p-field p-col-12 p-grid">
                <div className="p-col-6">
                    <p className="signature-line"></p>
                    <p className="font-extrabold">Member</p>
                </div>
                <div className="p-col-6">
                    <p className="signature-line"></p>
                    <p className="font-extrabold">BOD Chairman</p>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionAgreement;
