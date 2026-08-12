#include <stdio.h>
#include <string.h>

// scramble1
void scramble1(char arr[]) {

    int len = strlen(arr);          // center-out traversal: print middle, then left and right alternately

    int value = len;

    if (len <= 1) {
        printf("Can't Scramble it\n");
        return;
    }

    int left = 0;
    int right = len - 1;
    int mid = len / 2;

    while(value != 0){

        for (int i = 0; i < len; i++){

            if(value == len){
                printf("%c", arr[mid]);
                value--;
                break;
            }

            if(left < mid){
                printf("%c", arr[left]);
                left++;
                value--;
                break;
            }

            if(right > mid){
                printf("%c", arr[right]);
                right--;
                value--;
                break;
            }
        }
    }

    printf("\n");
}


// scramble2
void scramble2(char arr[])          // prints the left of middle, right of middle, first, last, and middle character
{
    int len = strlen(arr);

    if (len <= 2) {
        printf("Can't Scramble it\n");
        return;
    }

    int mid = len / 2;
    int left = mid - 1;
    int right = mid + 1;

    printf("%c", arr[left]);

    if(right < len)
        printf("%c", arr[right]);

    printf("%c", arr[0]);
    printf("%c", arr[len-1]);
    printf("%c", arr[mid]);

    printf("\n");
}


// scramble3    
void scramble3(char word[])     // using ASCII values to arrange then print the arranged word in reverse
{
    char temp[50];
    strcpy(temp, word);

    int len = strlen(temp);

    for(int i = 0; i < len - 1; i++)
    {
        for(int j = 0; j < len - i - 1; j++)
        {
            if(temp[j] > temp[j+1])
            {
                char t = temp[j];
                temp[j] = temp[j+1];
                temp[j+1] = t;
            }
        }
    }

    for(int i = len - 1; i >= 0; i--)
        printf("%c", temp[i]);

    printf("\n");
}


// check word loop
void checkword(char original[])
{
    char guess[50];

    while(1)
    {
        printf("Guess the Real Word: ");
        scanf("%49s", guess);

        if(strcmp(guess, original) == 0)
        {
            printf("Congratulations! Correct word!\n");
            break;
        }
        else
        {
            printf("Incorrect. Try again.\n");
        }
    }
}


int main()
{
    char arr[50];
    int choice;

    printf("Enter A Word to Scramble it: ");
    scanf("%49s", arr);

    printf("Choose Scramble Method (1,2,3): ");
    scanf("%d", &choice);

    printf("Scrambled Word: ");

    if(choice == 1)
        scramble1(arr);

    else if(choice == 2)
        scramble2(arr);

    else if(choice == 3)
        scramble3(arr);

    else
    {
        printf("Invalid choice\n");
        return 0;
    }

    checkword(arr);

    return 0;
}