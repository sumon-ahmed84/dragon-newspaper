import { use } from 'react';
import { NavLink } from 'react-router';
const CatagoryPromise= fetch('/categories.json').then(res=>res.json());


const Catagory = () => {
    const Catagori = use (CatagoryPromise);
    return (
        <div>
           <h2 className="font-bold">All Catagories({Catagori.length})</h2>
           <div className="grid grid-cols-1 mt-2 gap-3">
            {
                Catagori.map(Catagori=>(
                    <NavLink key={Catagori.id} className="btn border-0 bg-base-100 hover:bg-base-200"
                    to={`/catagories/${Catagori.id}`}
                    >
                        {Catagori.name}
                    </NavLink>
                ))
            }
           </div>

        </div>
    );
};

export default Catagory;