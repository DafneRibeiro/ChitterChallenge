import Peep from '../model/peepSchema.js';


const getAllpeeps = async(req,res)=>{
    const peeps = await Peep.find();

    if (!peeps){
        return res.status(404).json({error: 'Not Found'})
    }

    res.status(200).json(peeps);

}

const PeepsControls = {getAllpeeps};

export default PeepsControls;