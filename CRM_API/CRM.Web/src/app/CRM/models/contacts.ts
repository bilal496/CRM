export class Contact
{
    ContactNumber: number;
    FirstName: string;
    LastName: string;
    PrimaryEmail: string;
    SecondaryEmail: string;
    MobileNo: string;
    HomeNo: string;
    OfficeNo: string;
    Fax: string;
    Company: string;
    BirthDate: Date;
    AnniversaryDate: Date;
    SpouseName: string;
    SpouseEmail: string;
    SpousePhone: string;
    SpouseBirthDay: Date;
    Source: number;
    Status: number;
    HotnessLevel: number;
    Tags: string;
    AssignedUser: number;
    Comments: string;
    CreatedBy: number;
    CreatedDate: Date;
    ChangedBy: number;
    ChangedDate: Date;
    IsActive: number;

    constructor() {
        this.FirstName = "";
        this.LastName = "";
        this.PrimaryEmail = "";
        this.SecondaryEmail = "";
        this.MobileNo = "";
        this.HomeNo = "";
        this.OfficeNo = "";
        this.Fax = "";
        this.Company = "";
        this.BirthDate = new Date();
        this.AnniversaryDate = new Date();
        this.SpouseName = "";
        this.SpouseEmail = "";
        this.SpousePhone = "";
        this.SpouseBirthDay = new Date();
        this.Source = 0;
        this.Status = 0;
        this.HotnessLevel = 0;
        this.Tags = "";
        this.AssignedUser = 0;
        this.Comments = "";
        this.CreatedBy = 0;
        this.CreatedDate = new Date();
        this.ChangedBy = 0;
        this.ChangedDate = new Date();
        this.IsActive = 0;
    }
}