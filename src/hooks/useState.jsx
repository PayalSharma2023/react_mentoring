//useeffect
import * as React from 'react';

const App = ()=> {
    const [toggle , setToggle] = React.useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return <Toggler toggle = {toggle} onToggle={handleToggle}/>;

};

const Toggler = ({toggle, onToggle}) => {

    React.useEffect(() => {
        console.log('I still run only if toggle changes (and on mount).')
    }, [toggle])
    return(
        <div>
            <button type='button' onClick={onToggle}>
                toggle
            </button>
            {toggle && <div>Hello React</div>}
        </div>
    );
};


export default App;