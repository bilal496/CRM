export class Task {
    TaskNumber: number;
    Category: number;
    Status: number;
    Description: string;
    Notes: string;
    AssignTo: number;
    NotifyAssignee: boolean;
    Reminder: number;
    ContactId: number;
    DueDate: Date;
    CreatedBy: number;
    CreatedDate: Date;
    ChangedBy: number;
    ChangedDate: Date;
    IsActive: boolean;
    
    constructor() {
        this.TaskNumber= 0;
        this.Category= 0;
        this.Status= 0;
        this.Description = '';
        this.Notes = '';
        this.AssignTo= 0;
        this.NotifyAssignee= false;
        this.Reminder= 0;
        this.ContactId= 0;
        this.DueDate= new Date();
        this.CreatedBy= 0;
        this.CreatedDate= new Date();
        this.ChangedBy= 0;
        this.ChangedDate= new Date();
        this.IsActive= true;
    }
}