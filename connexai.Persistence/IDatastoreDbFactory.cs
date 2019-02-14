using Google.Cloud.Datastore.V1;

namespace ConnexAi.Persistence
{
    public interface IDatastoreDbFactory
    {
        DatastoreDb CreateDatastoreDb();
    }
}