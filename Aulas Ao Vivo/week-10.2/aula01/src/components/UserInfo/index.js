const UserInfo = ({ endpoint, userData: { id, name, username, email } }) => {
  return (
    <div>
      <h3>
        {id} - {name}
      </h3>
      <p>
        {username} {`<${email}>`}
      </p>
    </div>
  );
};

export default UserInfo;
