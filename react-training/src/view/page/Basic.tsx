import React, {useEffect} from 'react';

export const exampleOfListing = [
  'useState',
  'useEffect',
  'useRef',
  'useMemo',
];

class ClassComponent extends React.Component<{name: string}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    console.log('ClassComponent init');
  }

  render() {
    return (
      <div>
        <h3>Hi, I am a class component</h3>
        - I can not use react hook :(
        <br />
        <b>My name is {this.props.name}</b>
      </div>
  );
  }
}

function FunctionComponent(props: any) {
  useEffect(() => {
    console.log('FunctionComponent init');
  });

  let backgroundColor = 'lightblue';
  return (
    <div>
      <h3 style={{display: 'block', backgroundColor: backgroundColor}}>Hi, I am a function component</h3>
      - I can use react hook and it is huge advantage!
      <br />
      <b>My name is {props.name}</b>
      <ul>
        {exampleOfListing.slice(1).map((reactHook: string) => (
          <li key={reactHook}>{reactHook}</li>
        ))}
      </ul>
    </div>
  );
}

function ReactBasic() {
  return(
    <React.Fragment>
      <h1 className={'center'}>React introduction</h1>
      <hr/>
      <div className={'center'}>
        <h2>Class component</h2>
        <ClassComponent name={'Edo'} />
      </div>
      <div className={'center'}>
        <h2>Function component</h2>
        <FunctionComponent name={'Marcel'} />
      </div>
    </React.Fragment>
  );
}

export default ReactBasic;
