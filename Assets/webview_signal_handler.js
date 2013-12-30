#pragma strict
var web_viewer : GameObject;

function Start () {
  var m_View = GetComponent(CoherentUIView);
  Debug.Log("MVIEW: "+m_View);
  Debug.Log(m_View.Page);
  m_View.Listener.ReadyForBindings += function(frameId, path, isMainFrame) {
  if (isMainFrame)
    {
      m_View.View.BindCall("accept_call", this.AcceptCall);
      Debug.Log("PATHPATH"+path);
    }
  };
}

function AcceptCall() {
  Debug.Log("!!AcceptCall!!");
}

function Update () {

}
