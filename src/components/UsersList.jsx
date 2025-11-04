import ProfileCard from "./ProfileCard"

const UsersList = () => {
    return (
        <div className="users-list">
            <ProfileCard name="Elo Musk" email="elon@gmail.com" age={30} image="https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg" />
            <ProfileCard />
            <ProfileCard />
        </div>
    )
}

export default UsersList