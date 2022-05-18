import PropTypes from 'prop-types';

function UserCard(props) {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h3>name: {props.name}</h3>
      <p>{props.nickName ? `nick: ${props.nickName}` : 'NA'}</p>
      <p>start year: {props.year}</p>
      <p>keyprhase: {props.credentials.keyphrase}</p>
      <p>spyId: {props.credentials.spyId}</p>
      <h3>Favorite fruit</h3>

      <ul>
        {props.fruits.map((fruit) => {
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  nickName: PropTypes.string,
  year: PropTypes.number.isRequired,
  fruits: PropTypes.array,
  credentials: PropTypes.shape({
    keyphrase: PropTypes.string.isRequired,
    spyId: PropTypes.number.isRequired,
  }),
};

export default function PropTypesExample() {
  // THIS IS AN ANTIPATTERN DONT USE IT
  // const element = document.querySelectorAll('h2');

  // console.log(element);
  return (
    <>
      <h2>prop-types example</h2>
      <UserCard
        name="Valeria"
        nickName="leraservertnik"
        year={2022}
        fruits={['kiwi', 'orange']}
        credentials={{ keyphrase: 'Hi i am a spy', spyId: 12 }}
      />
      <UserCard
        name="Karl"
        year={2019}
        fruits={['mango', 'banana']}
        credentials={{ keyphrase: 'Hey i am karl', spyId: 2 }}
      />
    </>
  );
}
