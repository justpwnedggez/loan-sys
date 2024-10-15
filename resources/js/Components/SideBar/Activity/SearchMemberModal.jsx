export const MemberSelectionList = ({ membersData, onSelect }) => {
    return (
        <div>
            <ul>
                {membersData.map(member => (
                    <li key={member.id}>
                        <button onClick={() => onSelect(member)}>{member.first_name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
