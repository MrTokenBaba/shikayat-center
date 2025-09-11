import {Schema, model, models} from 'mongoose'

const ComplaintSchema = new Schema({
        title: {type: String, required: true},
        description: {type: String},
        status: {type: String},
        //attachments: [{type: Schema.Types.ObjectId, ref: 'Attachment'}],
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    }, {
        timestamps: true
    }
)

const Complaint = models.Complaint || model('Complaint', ComplaintSchema)

export default Complaint
