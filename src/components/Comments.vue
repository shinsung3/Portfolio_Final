<template>
  <v-container>
    <v-layout>
      <v-content>
        <v-flex>
          <v-row>
            <v-text-field
              v-model="text"
              label="댓글을 입력해 주세요"
              required
              append-outer-icon="add_comment"
              @click:append-outer="insert">
            </v-text-field>
          </v-row>
        </v-flex>

        <v-flex v-for="(i, j) in idcomments.length > limits
            ? limits
            : idcomments.length" :key="j">

          <div>
            <v-list-item>
              <v-list-item-content v-if="idcomments[i - 1].portid == thisid">
                <div class="overline">
                  <v-chip class="ma-2"><strong>{{ idcomments[i - 1].writer }}</strong></v-chip> {{ idcomments[i - 1].created_at | moment("YYYY년 MM월 DD일")}}
                </div>
                <v-list-item-subtitle class="ma-3">{{ idcomments[i - 1].text }}</v-list-item-subtitle>
                <v-row>
                  <v-card-actions v-if="idcomments[i - 1].writer == thislogin">
                    <v-btn v-if="check==''" flat icon @click="check=idcomments[i - 1].id">
                      <v-icon>comment</v-icon>
                    </v-btn>
                    <v-btn v-else-if="check==idcomments[i - 1].id" flat icon @click="check=''">
                      <v-icon>arrow_back</v-icon>
                    </v-btn>
                    <v-btn v-else flat icon @click="check=idcomments[i - 1].id">
                      <v-icon>comment</v-icon>
                    </v-btn>
                    <!-- 여기에 수정버튼,모달창 -->
                    <v-dialog
                      v-model="dialog"
                      width="500"
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          flat
                          icon
                          v-on="on"
                        >
                          <v-icon>edit</v-icon>
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card-title
                          class="headline grey lighten-2"
                          primary-title
                        >
                         수정하실 댓글을 적어주세요
                        </v-card-title>

                        <v-card-text>
                          <v-text-field
                            v-model="idcomments[i - 1].text"
                            required
                            >
                          </v-text-field>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            @click="set(idcomments[i - 1].id, idcomments[i - 1].text)"
                          >
                            I accept
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-btn flat icon @click="del(idcomments[i - 1].id)">
                      <v-icon>close</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions v-else>
                    <v-btn v-if="check==''" flat icon @click="check=idcomments[i - 1].id">
                      <v-icon>comment</v-icon>
                    </v-btn>
                    <v-btn v-else-if="check==idcomments[i - 1].id" flat icon @click="check=''">
                      <v-icon>arrow_back</v-icon>
                    </v-btn>
                    <v-btn v-else flat icon @click="check=idcomments[i - 1].id">
                      <v-icon>comment</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-row>
                <hr class="bottomline" style="margin:10px 0px">
              </v-list-item-content>
            </v-list-item>

            <!-- 대댓글부분 -->
            <div v-if="check==idcomments[i - 1].id" class="ml-5">
              <v-row>
                <v-container style="padding:0px">
                  <v-flex>
                    <v-row>
                      <v-text-field
                        v-model="reply"
                        label="댓글을 입력해 주세요"
                        required
                        append-outer-icon="add_comment"
                        @click:append-outer="replyinsert">
                      </v-text-field>
                    </v-row>
                  </v-flex>
                </v-container>
                <v-flex v-for="(i, j) in idcomments.length > limits
                      ? limits
                      : idcomments.length" :key="j">
                  <div>
                    <v-list-item>
                      <v-list-item-content v-if="idcomments[i - 1].portid == check">

                        <div class="overline">
                          <v-chip class="ma-2"><strong>{{ idcomments[i - 1].writer }}</strong></v-chip> {{ idcomments[i - 1].created_at | moment("YYYY년 MM월 DD일")}}
                        </div>
                        <v-list-item-subtitle class="ma-3">{{ idcomments[i - 1].text }}</v-list-item-subtitle>
                        <v-card-actions v-if="idcomments[i - 1].writer == thislogin">
                          <v-dialog
                            v-model="dialog"
                            width="500"
                          >
                            <template v-slot:activator="{ on }">
                              <v-btn
                                flat
                                icon
                                v-on="on"
                              >
                                <v-icon>edit</v-icon>
                              </v-btn>
                            </template>

                            <v-card>
                              <v-card-title
                                class="headline grey lighten-2"
                                primary-title
                              >
                               수정하실 댓글을 적어주세요
                              </v-card-title>

                              <v-card-text>
                                <v-text-field
                                  v-model="idcomments[i - 1].text"
                                  required
                                  >
                                </v-text-field>
                              </v-card-text>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="primary"
                                  @click="set(idcomments[i - 1].id, idcomments[i - 1].text)"
                                >
                                  I accept
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                          <v-btn flat icon @click="del(idcomments[i - 1].id)">
                            <v-icon>close</v-icon>
                          </v-btn>
                        </v-card-actions>
                        <hr class="bottomline" style="margin:10px 0px">
                      </v-list-item-content>
                    </v-list-item>

                  </div>
                </v-flex>

              </v-row>
            </div>


          </div>
        </v-flex>

      </v-content>
    </v-layout>
  </v-container>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import axios from "axios";
import PortfolioDetail from "../views/PortfolioDetail.vue";

export default {
  name: "Comments",
  data: () => ({
    idcomments: [],
    portid: "",
    fk: "",
    text: "",
    retext:"",
    reply:"",
    writer: "",
    thisid: "",
    thisurl: "",
    thislogin: "",
    check: "",
    // dialog: "false",
  }),
  mounted() {
    this.getcommentsByIndex();
    this.comments();
    this.delcomment();
    this.setcomment();
  },
  methods: {
    async getcommentsByIndex() {
      this.idcomments = await FirebaseService.getcommentsByIndex(
        this.$route.query.id
      );
      this.thisid = this.$route.query.id
      this.thislogin = this.$store.state.user.displayName
    },

    insert(portid) {
      if (this.idcomments.length == 0) {
        this.thisurl = document.location.href
        this.portid = FirebaseService.comments(
          this.portid = this.$route.query.id,
          this.fk = 1,
          this.text,
          this.writer = this.$store.state.user.displayName,
        )
        location.href = this.thisurl
      } else {
        this.thisurl = document.location.href
        this.portid = FirebaseService.comments(
          this.portid = this.$route.query.id,
          this.idcomments[0].fk + 1,
          this.text,
          this.writer = this.$store.state.user.displayName,
        )
        location.href = this.thisurl
      }
    },
    replyinsert(portid) {
      if (this.idcomments.length == 0) {
        this.thisurl = document.location.href
        this.portid = FirebaseService.comments(
          this.portid = this.check,
          this.fk = 1,
          this.reply,
          this.writer = this.$store.state.user.displayName,
        )
        location.href = this.thisurl
      } else {
        this.thisurl = document.location.href
        this.portid = FirebaseService.comments(
          this.portid = this.check,
          this.idcomments[0].fk + 1,
          this.reply,
          this.writer = this.$store.state.user.displayName,
        )
        location.href = this.thisurl
      }
    },
    del(id) {
      this.thisurl = document.location.href
      this.portid = FirebaseService.delcomment(id);
      location.href = this.thisurl
    },
    set(id,retext) {
      this.thisurl = document.location.href
      this.portid = FirebaseService.setcomment(
        id,
        retext
      );
      location.href = this.thisurl
    },
  }


}
</script>

<style media="screen">
  .comments {
    border-color: transparent!important;
  }

  /* hr {
    border: 0;
    height: 1px;
    background-color:grey;
  } */
</style>
