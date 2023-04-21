import React from 'react';
import PanelKU from '../../../components/Panel';

const ProfileCard = () => {
    return <div>
        <PanelKU title={'Profile'}>
            <div className='flex flex-row'>
                <img className='w-8rem h-8rem' src={"https://demos.telerik.com/kendo-ui/content/integration/bootstrap/avatar.jpg"} />
                <div className='flex flex-column ml-8'>
                    <p className='m-0'>{"Jonathan"}</p>
                    <p className='m-0'>{"Dodsworth"}</p>
                    <p className='m-0'>{"Inside Sales Coordinator"}</p>
                </div>
            </div>

        </PanelKU>
    </div>
}

export default ProfileCard;