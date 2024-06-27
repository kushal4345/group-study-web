const meetingCodes = {
    meetingCode1: 'tpr-msju-fra',
    meetingCode2: 'vdd-dvup-csh',
    meetingCode3: 'ako-wtqv-sso',
    meetingCode4: 'ako-wtqv-sso',
    meetingCode5: 'ako-wtqv-sso',
    meetingCode6: 'ako-wtqv-sso',
    meetingCode7: 'ako-wtqv-sso',
    meetingCode8: 'ako-wtqv-sso',
      meetingCode8: 'ako-wtqv-sso'


};

function joinMeetingg(meetingCodeKey) {
    const meetingCode = meetingCodes[meetingCodeKey];
    const meetUrl = `https://meet.google.com/${meetingCode}`;
    window.open(meetUrl, '_blank');
}