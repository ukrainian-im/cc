export async function onRequestPost(context) {

    // context.contextpassThroughOnException()    const { request, env } = context

    const response = '<?xml version="1.0" encoding="UTF-8"?><Response><Say>Hello.</Say><Record transcribe="true" maxLength="30"/><Hangup/></Response>';

    return new Response(response,{
        headers: { "Content-Type": "application/xml" }
        // headers: { "Content-Type": "text/xml" }    })
    });
}
