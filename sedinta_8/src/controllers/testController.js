export const longFunction = async (req, res) => {
    for (let index = 0; index < 6000000000; index++) {
    }

    res.json({done: true})
}

export const shortFunction = async (req, res) => {
    res.json({done: true})
}