import{test , expect, request} from '@playwright/test'

const loginPayload = {
    userEmail : "",
    userPassword : ""
}

test('API Testing' , async({request})=>{

   const apiRespnse = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login" , {
        data : loginPayload,
        headers : {
            "Content-Type" : "application/json"
        },
    })
    
    const jsonResponse = await apiRespnse.json()  
    expect(await jsonResponse.message).toBe("Login Successfully")
    console.log(jsonResponse)
})