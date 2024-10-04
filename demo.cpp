//[54, 76, 34, 23, 49, 38]

#include <iostream>
#include<set>
using namespace std;

int main()
{
    int arr[]={54,76,34,23,49,38,34,23};
    int n=8;
    set<int>st;
    for(int i=0;i<n;i++){
        st.insert(arr[i]);
    }
    int fSmallest=arr[0];
    int sSmallest;
    for(auto it:st){
        if(fSmallest>it){
            sSmallest=fSmallest;
            fSmallest=it;
        }
        else if(fSmallest!=sSmallest && sSmallest>it){
            sSmallest=it;
        }
    }
    cout << sSmallest << endl;

    return 0;
}


