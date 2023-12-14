const getAllJobs = async (request, response) => {
    response.send('Get All Jobs!');
}

const getJob = async (request, response) => {
    response.send('Get a Job!');
}

const createJob = async (request, response) => {
    response.send('Create a Job!');
}

const updateJob = async (request, response) => {
    response.send('Update a job!');
}

const deleteJob = async (request, response) => {
    response.send('Delete a job!');
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
};