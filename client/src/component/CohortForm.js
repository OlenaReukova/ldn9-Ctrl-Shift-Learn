export const CohortForm = () => {
    return (
        <form style={{ display: "grid" }} >
            <label htmlFor="new-cohort" > Cohort Name</label>
            <input type="text" id="new-cohort" placeholder="type new cohort name here" />
            <label htmlFor="cohort-date" >Start Date</label>
            <input type="date" id="cohort-date" />
            <button>Submit</button>
        </form>
    );
};
