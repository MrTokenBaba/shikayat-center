export default function ComplaintCard({ title, company, status }) {
    return (
        <div className="border p-4 rounded-lg shadow">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-600">{company}</p>
            <span className="text-sm text-blue-600">Status: {status}</span>
        </div>
    );
}