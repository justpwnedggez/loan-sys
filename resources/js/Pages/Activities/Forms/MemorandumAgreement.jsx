import React from 'react';
import { Divider } from 'primereact/divider';

const MemorandumAgreement = () => {
    return (
        <div className="memorandum-form p-grid p-fluid">
            <div className="p-field p-col-12">
                <h2 className="text-center font-extrabold">MEMORANDUM OF AGREEMENT</h2>
            </div>
            <div className="p-field p-col-12">
                <h2 className="font-extrabold">KNOW ALL MEN BY THESE PRESENTS</h2>
            </div>

            <div className="p-field p-col-12">
                <p>
                    This Memorandum of Agreement (MOA) for the offsetting of Mortuary Member is made and entered by and between:
                </p>
            </div>

            <Divider />

            <div className="p-field p-col-12">
            <span className="underline underline-offset-1"></span><br />
                <p className="font-extrabold">
                    NAME OF MEMBER
                </p>
            </div>

            <div className="p-field p-col-12">
                <p>
                    A Filipino citizen, <span className="underline underline-offset-1"></span> years of age, with postal address at <span className="underline underline-offset-1"></span>, herein referred to as the MEMBER.
                </p>
            </div>

            <Divider />

            <div className="p-field p-col-12">
                <p className="text-center">- and -</p>
            </div>

            <Divider />

            <div className="p-field p-col-12">
                <p>
                    CMPC duly represented by <span className="underline underline-offset-1"></span> hereinafter referred to as the COOPERATIVE.
                </p>
            </div>

            <Divider />
        </div>
    );
}

export default MemorandumAgreement;
