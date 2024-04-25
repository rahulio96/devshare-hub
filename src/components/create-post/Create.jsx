import ManagePost from "../manage-post/ManagePost"


function Create() {

    return (
        <ManagePost 
            yesBtn={'Post'}
            noBtn={'Clear'}
            title={''}
            body={''}
            tags={''}
            link={''}
            isCreate={true}
        />
    )
}

export default Create