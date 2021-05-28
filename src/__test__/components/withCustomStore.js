import MockWrapper from "./MockWrapper";
import { MatchesContext } from '../../context/MatchesContext/MatchesContext'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { SwipeContext } from "../../context/SwipeContext/SwipeContext"
import { MeetupsContext } from "../../context/MeetupsContext/MeetupsContext"

const withCustomStore = (ChildComponent, customStore) => {
    return (
      <MockWrapper>
        <MeetupsContext.Provider value={customStore}>
          <SwipeContext.Provider value={customStore}>
            <AuthContext.Provider value={customStore}>
              <MatchesContext.Provider value={customStore}>
                  {ChildComponent}
              </MatchesContext.Provider>
            </AuthContext.Provider>
          </SwipeContext.Provider>
        </MeetupsContext.Provider>
      </MockWrapper>
    )
}

export default withCustomStore