import React from 'react';
import { Divider } from 'primereact/divider';

const SubscriptionAgreement = () => {

    return (
        <div className="subscription-form p-grid p-fluid">
            <div className="p-field p-col-12">
                <h2 className="text-center font-extrabold">SUBSCRIPTION AGREEMENT</h2>
            </div>

            <div className="p-field p-col-12">
                <p className="font-extrabold">The BOD of Cabaruan Coop;</p>
                <p>This is to let it be known that <span className="underline underline-offset-1"></span> Civil Status <span className="underline underline-offset-1"></span> Age <span className="underline underline-offset-1"></span>, married to <span className="underline underline-offset-1"></span> and a resident of <span className="underline underline-offset-1"></span>, hereby apply for membership and agree to pay the subscribed share capital in the amount of PHP <span className="underline underline-offset-1"></span> within <span className="underline underline-offset-1"></span> years as specified in the policy of the Cooperative.</p>
            </div>

            <div className="p-field p-col-12">
                <p>I hereby remit the amount of <span className="underline underline-offset-1"></span> ₱ (<span className="underline underline-offset-1"></span>).</p>
            </div>

            <div className="p-field p-col-12">
                <p>As my initial fixed deposit this <span className="underline underline-offset-1"></span> day of <span className="underline underline-offset-1"></span> 20 <span className="underline underline-offset-1"></span>.</p>
            </div>

            <div className="p-field p-col-12">
                <p className="signature-line"></p>
                <p className="text-center font-extrabold">Signature over Printed Name of Applicant</p>
            </div>

            <Divider />

            <div className="p-field p-col-12 p-grid">
                <div className="p-col-6">
                    <p className="font-extrabold">SCHEDULE OF SEMINAR: <span className="underline underline-offset-1"></span></p>
                </div>
                <div className="p-col-6">
                    <p className="font-extrabold">DUE DATE: <span className="underline underline-offset-1"></span></p>
                </div>
            </div>

            <Divider />

            <div className="p-field p-col-12">
                <h3 className="font-extrabold">FOR OFFICE USE ONLY</h3>
                <p>This is to certify that the applicant as prescribed above has completed the basic requirements for admission in this cooperative. The committee, therefore, recommended:</p>
            </div>

            <div className="p-field p-col-12">
                <p className="font-extrabold">Approval: [ ]</p>
                <p className="font-extrabold">Disapproval: [ ]</p>
            </div>

            <div className="p-field p-col-12">
                <p className="font-extrabold">Reason for Disapproval: <span className="underline underline-offset-1"></span></p>
            </div>

            <Divider />

            <div className="p-field p-col-6">
                <p className="font-extrabold">ENDORSED BY:</p>
                <p><span className="underline underline-offset-1">test</span></p>
                <p className="font-extrabold">Membership Committee</p>
            </div>

            <div className="p-field p-col-6">
                <p><span className="underline underline-offset-1">test</span></p>
                <p className="font-extrabold">Education Committee Chairman</p>
            </div>

            <Divider />

            <div className="p-field p-col-12">
                <h3 className="font-extrabold">BOARD ACTION:</h3>
            </div>

            <div className="p-field p-col-6">
                <p>Approved: [ ]</p>
            </div>

            <div className="p-field p-col-6">
                <p>Disapproved: [ ]</p>
            </div>

            <div className="p-field p-col-12 text-right">
                <h5>JAMES W. ANGNGAD</h5>
                <p className="font-extrabold">BOD Chairman</p>
            </div>
        </div>
    );
}

export default SubscriptionAgreement;
