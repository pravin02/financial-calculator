import React from 'react';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';


function EquityLinkedSavingScheme() {

    return (
        <Card title="Equity Linked Savings Scheme">
            <div className='grid columns-2'>
                <label htmlFor='depositAmount'> Lump sum Deposit Amount </label>
                <InputText id="depositAmount" keyfilter="int" raised />
            </div>
            <div className='grid columns-2'>
                <label htmlFor='expectedReturnPercentage'> Expected Returns Rate (%) </label>
                <InputText id="expectedReturnPercentage" />
            </div>
            <div className='grid'>
                <label> 3 Years </label>
                <label> Lockin Term </label>

            </div>
            <div className='grid'>
                <label htmlFor='depositTerm'> Deposit Term In Years</label>
                <InputText id="depositTerm" alt='3 years or more' />
            </div>
            <Divider />
            <ButtonGroup>
                <Button label='Reset' raised icon="pi pi-times" />
                <Button label='Calculate' raised icon="pi pi-check" />
            </ButtonGroup>
        </Card>
    )

}

export default EquityLinkedSavingScheme;