class Contact 
{

    //public properties
    get FullName()
    {
        return this.m_fullName;
    }
    set FullName(fullName)
    {
        this.m_fullName = fullName;
    }
    get ContactNumber()
    {
        return this.m_contactNumber;
    }
    set ContactNumber(contactNumber)
    {
        this.m_contactNumber = contactNumber;
    }
    get EmailAddress()
    {
        return this.m_emailAddress;
    }
    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress;
    }

    //costructor
    constructor(fullName = "", contactNumber = "", emailAddress = "")
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    //public method
    serialized()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
        {
            return`${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
        }
            console.error("One or More Properites are missing or empty");
            return null;
    }
    deserialized(data)//assume data object is comma seprated list properites
    {
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }

    //overriden methods
    toString()
    {
        return `Full Name: ${this.FullName}\nContactNumber: ${this.ContactNumber}\nEmail Address: ${this.EmailAddress}`
    }
}