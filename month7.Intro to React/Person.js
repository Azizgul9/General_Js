<script src="https://fb.me/react-15.0.0.js"></script>
    <script src="https://fb.me/react-dom-15.0.0.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
    <script type="text/babel">

    function Person(props) {

        // return (
        //
        //     <div className="person">
        //
        //         <h1>{props.name}</h1>
        //
        //         <p>Age: {props.age}</p>
        //
        //     </div>
        //
        // );
        // return React.createElement('div', null, 'h1', props.name);
        return React.createElement('div', {className: 'person'},
            React.createElement('h1', null, props.name),
            React.createElement('p', null, `Age: ${props.age}`)
        );

    }

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

ReactDOM.render(<Person name="Dmitrii" age="28"/>, p1);
ReactDOM.render(<Person name="John" age="30"/>, p2);
</script>