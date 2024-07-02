
function Item({name, ispacked}){
    // return <li className=""{name}></li>

    if(ispacked){
        return null;
    }
    else{
        return<li className="">{name}</li>;
    }
}

function PackageList(){
    return(
        <section>
            <h1>Naivas Packaging List</h1>
            <ul>
                <Item ispacked={true} name="2kg Mumias Sugar"/>
                <Item ispacked={true} name="5kg Pishori Rice"/>
                <Item ispacked={false} name="1kg Ndengu"/>
            </ul>
        </section>
    );
}

export default PackageList