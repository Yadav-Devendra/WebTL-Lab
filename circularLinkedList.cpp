#include <iostream>
using namespace std;
struct Node
{
    int data;
    struct Node *next;
};
Node *front = NULL;
Node *rear = NULL;
void enqueue(int val)
{
    if (front == NULL || rear == NULL)
    {
        Node *newNode = new Node;
        newNode->data = val;
        newNode->next = NULL;
        front = newNode;
        rear = newNode;
    }
    else
    {
        Node *newNode = new Node;
        newNode->data = val;
        rear->next = newNode;
        newNode->next = front;
        rear = newNode;
    }
}
void dequeue()
{
    Node *n = front;
    if (front == NULL)
    {
        cout << "Underflow \n"<< endl;
        return;
    }
    else
    {
        front = front->next;
        delete (n);
    }
}
void display()
{
    Node *ptr = front;
    if (ptr == NULL)
    {
        cout << "Queue is Empty "<< endl;
        return;
    }
    else
    {
        do
        {
            cout << ptr->data << " ";
            //cout<<ptr->next<<"--"<<ptr->data<<endl;
            ptr = ptr->next;
            cout << "\n";
        } while (ptr != front);//ptr != rear->next
    }
}
int main()
{
    int choice;
    int val;
    cout << "CIRCULAR QUEUE OPERATIONS USING LINKED LIST" << endl;
    cout << "\n 1.ENQUEUE\n 2.DEQUEUE\n 3.DISPLAY\n 4.EXIT" << endl;
    do
    {
        cout << "Enter the Choice: ";
        cin >> choice;
        switch (choice)
        {
        case 1:
        {
            cout << "Enter value to be ENQUEUE: ";
            cin >> val;
            enqueue(val);
            break;
        }
        case 2:
        {
            dequeue();
            break;
        }
        case 3:
        {
            display();
            break;
        }
        case 4:
        {
            cout << "Exit \n"<< endl;
            break;
        }
        default:
        {
            cout << "Invalid Input!, Please Enter a Valid Choice(1/2/3/4) \n"<< endl;
        }
        }
    } while (choice != 4);
    return 0;
}
