import { useState } from "react";
import { CohortForm } from "./CohortForm";

export const AddCohortButton = () => {
    const [form, setForm] = useState(false);

    const handleAddCohort = () => {
        setForm(true);
    };

    return (
        <div>
            <button onClick={() => handleAddCohort()}>Add New Cohort</button>
            {form && <CohortForm />}
        </div>
    );
};