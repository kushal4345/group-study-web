const meetingCodes = {
    meetingCode1: 'abcd-efgh-ijkl',
    meetingCode2: 'mnop-qrst-uvwx',
    meetingCode3: 'yzab-cdef-ghij'
};

function joinMeeting(meetingCodeKey) {
    const meetingCode = meetingCodes[meetingCodeKey];
    const meetUrl = `https://meet.google.com/${meetingCode}`;
    window.open(meetUrl, '_blank');
}